import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Container } from '@mui/material'

function AddContact() {
    return (
        <div>

            <Container maxWidth='sm'>
                <Typography variant='h3' align='center'>
                    Add New Contact
                </Typography>
                <Grid>
                    <Card style={{ maxWidth: '450', padding: '20px 5px', margin: ' auto' }}>
                        <CardContent>
                            <form >
                                <Grid container spacin={3}>
                                    <Grid xs={12} sm={6} item>
                                        <TextField placeholder='Name' name='first_name' variant='outlined' fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField placeholder='Surname' name='last_name' variant='outlined' fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField type='email' placeholder='Email' name='email' variant='outlined' fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField type='phone' placeholder='Phone' name='phone' variant='outlined' fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField type='date' placeholder='Date of Birth' name='date' variant='outlined' fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField placeholder='Nationality' name='nationality' variant='outlined' fullWidth required />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Container>
        </div >
    )
}

export default AddContact