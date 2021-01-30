import React from "react";

import Layout from "components/Layout";
import Container from "components/Container";
import Row from "components/Row";
import Col from "components/Col";
import axios from "core/axios";
import SectionHeader from "components/SectionHeader";
import CreateForm from "components/CreateForm";
import { CREATE_POST } from "core/urls";
import Alert from "components/Alert";


const Create: React.FC = () => {
    const [success, setSuccess] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);

    const handleSubmit = React.useCallback((title: string, body: string) => {
        axios.post(CREATE_POST, {
            title: title,
            body: body,
            date: new Date()
        }, {
            headers: { 'Content-Type': 'application/json' }
        }).then(() => {
            setSuccess(true);
        }).catch(() => {
            setError(true);
        });
    }, []);

    return (
        <Layout title="Create a post">
            <Container>
                <Row justifyContent="center">
                    {success && <Alert type="success">Created successfully</Alert>}
                    {error && <Alert type="danger">Something went wrong</Alert>}

                    <Col xs={12}>
                    </Col>
                    <Col xs={12}>
                        <SectionHeader>Create a post</SectionHeader>
                    </Col>
                    <Col
                        xs={12}
                        md={9}
                        lg={7}
                    >
                        <CreateForm handleSubmit={handleSubmit} />
                    </Col>
                </Row>
            </Container>
        </Layout >
    );
}

export default Create;