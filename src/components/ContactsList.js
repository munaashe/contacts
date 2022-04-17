import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const CONTACTS_PER_PAGE = 25;

function ContactsList() {




    const [data, setData] = useState([]);

    useEffect(() => {
        loadContactsData();

    }, []);

    const loadContactsData = async () => {
        return await axios
            .get('http://localhost:5000/contacts')
            .then((response) => setData(response.data))
            .catch((err) => console.log(err))
    };



    const handleFilter = async (value) => {
        return await axios
            .get(`http://localhost:5000/contacts?status=${value}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => console.log(err))

    }

    //infinite scroll
    const [contacts, setContacts] = useState  ([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    const hasMoreData = contacts.length < 1000;

    const loadMoreContacts = () => {
        setPage((page) => page + 1);
        setLoading(true);
        setTimeout(() => {
            const newContacts = new Array(CONTACTS_PER_PAGE)
                .fill(1)
                .map((_, i) => page * CONTACTS_PER_PAGE + i);
            setContacts((conts) => [...conts, ...newContacts]);
            setLoading(false);
        }, 300);
    };


    return (
        <>
            {/* Filters Container. Something is wrong with my filters, but I'm failing*/}
            <Container maxWidth='lg' sx={{ marginTop: '25px' }}>
                <Typography variant='h4' align='center'>
                    PhoneBook
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={() => handleFilter("Canada")} >Canada</Button>
                        <Button>South Africa</Button>
                        <Button>New Zealand</Button>
                        <Button>USA</Button>
                    </ButtonGroup>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={() => handleFilter("women")}>women</Button>
                        <Button onClick={() => handleFilter("men")}>men</Button>
                    </ButtonGroup>
                </Box>
                


            </Container>
            <Container maxWidth='md' style={{ marginTop: '30px' }}>
                <InfiniteScroll
                    dataLength={CONTACTS_PER_PAGE}
                    hasMoreData={hasMoreData}
                    isLoading={loading}
                    onBottomHit={loadMoreContacts}
                    loadOnMount={true}
                >

                    {data.map(item =>
                        <Card sx={{ display: 'flex', flexGrow: '1', marginTop: '25px' }} key={item.id} variant='outlined'>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 160 }}
                                    image={item.profile_pic}
                                    alt={item.first_name}
                                />
                            </Box>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h6">
                                    {item.first_name}  {item.last_name}
                                </Typography>
                                <Typography component="div" variant="h6">
                                    {item.phone}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {item.email}
                                </Typography>
                                <Typography component="div" variant="subtitle2" color="text-secondary">
                                    {item.gender}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    From: {item.nationality}
                                </Typography>
                            </CardContent>
                        </Card>
                    )};
                </InfiniteScroll>
            </Container>
        </>
    )
}


export default ContactsList

