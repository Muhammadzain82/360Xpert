'use client';
import { useState } from "react";
import Container from "./../components/Container";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import Head from "next/head";

export default function Meet() {
    const [formData, setFormData] = useState({
        field: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        company: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, email })
            });

            if (!response.ok) throw new Error("Failed to send email");

            const result = await response.json();
            toast.success(result.message);

            setFormData({
                field: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                company: "",
                message: "",
            });
        } catch (error) {
            toast.error(error.message);
        }
    };

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handle = (e) => {
        setEmail(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        if (!email) {
            setEmailError(toast.error("Email is required"));
        } else {
            handleSubmit(e);
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us - 360XpertsSolutions</title>
            </Head>
            <Container>
                <Toaster />

                <div className="flex flex-col md:flex-row mt-36">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 text-base md:text-lg font-clash"
                        >
                            <label className="text-lg text-white">Looking For?</label>
                            <select
                                className="border bg-transparent border-gray-300 rounded-lg p-3 text-white bg-black"
                                id="cars"
                                name="field"
                                value={formData.field}
                                onChange={handleChange}
                            >
                                <option className="bg-black text-white" value="AI">AI</option>
                                <option className="bg-black text-white" value="AI">UI/UX</option>
                                <option className="bg-black text-white" value="ML">ML</option>
                                <option className="bg-black text-white" value="AI">DevOps</option>
                                <option className="bg-black text-white" value="AI">Project Management</option>
                                <option className="bg-black text-white" value="App Development">App Development</option>
                                <option className="bg-black text-white" value="Web Development">Web Development</option>
                                <option className="bg-black text-white" value="Web Development">BackEnd Development</option>
                            </select>


                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full">
                                    <label className="text-lg text-white" htmlFor="fname">First name</label>
                                    <input
                                        className="w-full bg-transparent text-white border border-gray-300 rounded-lg p-3"
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="text-lg text-white" htmlFor="lname">Last name</label>
                                    <input
                                        className="w-full text-white bg-transparent border border-gray-300 rounded-lg p-3"
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-full">
                                    <label className="text-lg text-white" htmlFor="phoneNumber">Phone Number</label>
                                    <input
                                        className="w-full bg-transparent text-white border border-gray-300 rounded-lg p-3"
                                        type="number"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <label className="text-lg text-white" htmlFor="email">Email</label>
                                    <input
                                        className="w-full text-white border bg-transparent border-gray-300 rounded-lg p-3"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={handle}
                                        required
                                    />
                                </div>
                            </div>

                            <label className="text-lg text-white" htmlFor="company">Company</label>
                            <input
                                className="w-full text-white border border-gray-300 bg-transparent rounded-lg p-3"
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                            />

                            <label className="text-lg text-white" htmlFor="message">Message</label>
                            <input
                                className="w-full border text-white border-gray-300 bg-transparent rounded-lg p-3"
                                type="text"
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />

                            <button
                                className="mt-5 px-10 py-3 rounded-md bg-red-800 text-white font-semibold  hover:bg-white hover:text-red-600 hover:border-red-600 border transition-all flex  gap-2 self-start"
                                type="submit"
                                onClick={submit}
                            >
                                Get started
                                {/* <ArrowRightAltIcon /> */}
                            </button>
                        </form>
                    </div>

                    <div className="md:w-1/2 flex justify-end order-1 md:order-2">
                        <Image
                            width={500}
                            height={700}
                            src={'/x.png'}
                            alt="Contact Us"
                        />
                    </div>
                </div>
            </Container>
        </>
    );
}
