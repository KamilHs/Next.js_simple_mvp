import React from "react";
import styled from "styled-components";

import FormGroup from "./inputs/FormGroup";
import TextField from "./inputs/TextField";
import TextArea from "./inputs/TextArea";
import Label from "./inputs/Label";
import Button from "./Button";

const Wrapper = styled.form`
padding:10px;
border: 1px solid #aaa;
border-radius:12px;
`
interface IProp {
    handleSubmit: (title: string, body: string) => void;
}

const CreateForm: React.FC<IProp> = ({ handleSubmit }) => {
    const [title, setTitle] = React.useState<string>("");
    const [body, setBody] = React.useState<string>("");
    const [titleError, setTitleError] = React.useState<boolean>(false);
    const [bodyError, setBodyError] = React.useState<boolean>(false);

    const handleTitleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(
            title === ""
                ? e.target.value.trim()
                : e.target.value
        );
    }, []);
    const handleBodyChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(
            body === ""
                ? e.target.value.trim()
                : e.target.value
        );
    }, []);

    const validate = React.useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (title === "")
            setTitleError(true);
        else
            setTitleError(false);
        if (body === "")
            setBodyError(true);
        else
            setBodyError(false);
        if (title !== "" && body !== "") {
            handleSubmit(title, body)
            setTitle("");
            setBody("");
        }
    }, [title, body]);

    return (
        <Wrapper onSubmit={validate}>
            <FormGroup>
                <Label htmlFor="title">Title</Label>
                <TextField error={titleError} onChange={handleTitleChange} value={title} id="title" autoComplete="off" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="body">Body</Label>
                <TextArea error={bodyError} onChange={handleBodyChange} value={body} id="body" />
            </FormGroup>
            <Button center>Submit</Button>
        </Wrapper>
    )
};

export default CreateForm;