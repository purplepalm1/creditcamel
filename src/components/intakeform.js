
import { TextField, Typography, Grid, Card, CardHeader, CardContent, Container, Button } from "@mui/material";
import { useState } from "react";

export default function BasicInfo() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [occupation, setOccupation] = useState("");
    const [email, setEmail] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '50px' }}>
            <Card raised>
                <CardHeader
                    title="Basic Information"
                    titleTypographyProps={{ variant: 'h4', align: 'center' }}
                />
                <CardContent>
                    <form onSubmit={handleFormSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstname}
                                    label="First Name"
                                    variant="outlined"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastname}
                                    label="Last Name"
                                    variant="outlined"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setAge(e.target.value)}
                                    value={age}
                                    label="Age"
                                    variant="outlined"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    onChange={(e) => setOccupation(e.target.value)}
                                    value={occupation}
                                    label="Occupation"
                                    variant="outlined"
                                    color="secondary"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    label="Email Address"
                                    variant="outlined"
                                    color="secondary"
                                    required
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    style={{ backgroundColor: '#FFA96A', color: 'black' }}
                                    fullWidth
                                >
                                    SUBMIT
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}
