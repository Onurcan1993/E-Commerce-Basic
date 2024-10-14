import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const formDatas = {
  email: "",
  password: "",
  isValidEmail: false,
  isValidPassword: false,
};

export default function FormElement() {
  const [forms, setForms] = useState(formDatas);
  const inputHandler = (e) => {
    const { value, name } = e.target;
    setForms({ ...forms, [name]: value });
  };

  // user valided email : sneaker06@gmail.com
  const validEmail = (userMail) => {
    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(
      userMail
    );
  };

  // password must contain 1 number (0-9)
  // password must contain 1 uppercase letters
  // password must contain 1 lowercase letters
  // password must contain 1 non-alpha numeric number
  // password is 8-16 characters with no space
  //password "Sneakers06*""
  const validPassword = (userPassword) => {
    return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm.test(
      userPassword
    );
  };

  useEffect(() => {
    setForms({
      ...forms,
      isValidEmail: validEmail(forms.email),
      isValidPassword: validPassword(forms.password),
    });
  }, [forms.email, forms.password]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      forms.email !== "sneaker06@gmail.com" ||
      forms.password !== "Sneakers06*"
    ) {
      toast.error("Please enter the correct email and password!", {
        position: "top-center",
        theme: "dark",
      });
      toast.info(
        "For login; email:'sneaker06@gmail.com', password:'Sneakers06*'",
        {
          position: "bottom-right",
          theme: "colored",
          autoClose: 10000,
        }
      );
    }
  };

  useEffect(() => {
    setForms({ ...forms, isValidEmail: true, isValidPassword: true });
  }, []);

  return (
    <Form onSubmit={submitHandler} className="w-full">
      <FormGroup floating>
        <Input
          onChange={inputHandler}
          className="shadow-none border-black"
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
          invalid={!forms.isValidEmail}
          value={forms.email}
          autoComplete="new-password"
        />
        <FormFeedback className="font-bold text-xl">
          Please enter valid email!
        </FormFeedback>
        <Label for="exampleEmail">Email</Label>
      </FormGroup>{" "}
      <FormGroup floating>
        <Input
          onChange={inputHandler}
          className="shadow-none border-black"
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
          invalid={!forms.isValidPassword}
          value={forms.password}
          autoComplete="new-password"
        />
        <FormFeedback className="font-bold text-xl">
          Password must contain 1 number, 1 uppercase letters, 1 lowercase
          letters, special characters, 8-16 word
        </FormFeedback>
        <Label for="examplePassword">Password</Label>
      </FormGroup>
      {forms.email === "sneaker06@gmail.com" &&
      forms.password === "Sneakers06*" ? (
        <Link to="/main">
          <Button color="danger">Submit</Button>
        </Link>
      ) : (
        <div>
          <button
            className=" bg-red-300 p-2 rounded-md hover:bg-red-500 transition-colors shadow-sm text-blue-600 font-medium"
            disabled={!(forms.isValidEmail && forms.isValidPassword)}
          >
            Submit
          </button>
        </div>
      )}
    </Form>
  );
}
