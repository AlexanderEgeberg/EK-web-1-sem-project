--
-- PostgreSQL database dump
--

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

-- Started on 2026-11-27 14:45:44 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 41193)
-- Name: artists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.artists (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    country character varying(60),
    bio text
);


--
-- TOC entry 219 (class 1259 OID 41192)
-- Name: artists_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.artists ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.artists_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 226 (class 1259 OID 41246)
-- Name: concerts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.concerts (
    id integer NOT NULL,
    artist_id integer NOT NULL,
    stage_id integer NOT NULL,
    starts_at timestamp without time zone NOT NULL,
    ends_at timestamp without time zone
);


--
-- TOC entry 225 (class 1259 OID 41245)
-- Name: concerts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.concerts ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.concerts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 224 (class 1259 OID 41213)
-- Name: guests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.guests (
    id integer NOT NULL,
    first_name character varying(60) NOT NULL,
    last_name character varying(60) NOT NULL,
    email character varying(100) NOT NULL
);


--
-- TOC entry 223 (class 1259 OID 41212)
-- Name: guests_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.guests ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.guests_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 227 (class 1259 OID 41267)
-- Name: program; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.program (
    guest_id integer NOT NULL,
    concert_id integer NOT NULL,
    added_at timestamp without time zone DEFAULT now()
);


--
-- TOC entry 222 (class 1259 OID 41205)
-- Name: stages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.stages (
    id integer NOT NULL,
    name character varying(60) NOT NULL,
    capacity integer NOT NULL
);


--
-- TOC entry 221 (class 1259 OID 41204)
-- Name: stages_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.stages ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.stages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3860 (class 0 OID 41193)
-- Dependencies: 220
-- Data for Name: artists; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3866 (class 0 OID 41246)
-- Dependencies: 226
-- Data for Name: concerts; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3864 (class 0 OID 41213)
-- Dependencies: 224
-- Data for Name: guests; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3867 (class 0 OID 41267)
-- Dependencies: 227
-- Data for Name: program; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3862 (class 0 OID 41205)
-- Dependencies: 222
-- Data for Name: stages; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 3873 (class 0 OID 0)
-- Dependencies: 219
-- Name: artists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.artists_id_seq', 1, false);


--
-- TOC entry 3874 (class 0 OID 0)
-- Dependencies: 225
-- Name: concerts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.concerts_id_seq', 1, false);


--
-- TOC entry 3875 (class 0 OID 0)
-- Dependencies: 223
-- Name: guests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.guests_id_seq', 1, false);


--
-- TOC entry 3876 (class 0 OID 0)
-- Dependencies: 221
-- Name: stages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.stages_id_seq', 1, false);


--
-- TOC entry 3691 (class 2606 OID 41203)
-- Name: artists artists_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_name_key UNIQUE (name);


--
-- TOC entry 3693 (class 2606 OID 41201)
-- Name: artists artists_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_pkey PRIMARY KEY (id);


--
-- TOC entry 3703 (class 2606 OID 41256)
-- Name: concerts concerts_artist_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.concerts
    ADD CONSTRAINT concerts_artist_id_key UNIQUE (artist_id);


--
-- TOC entry 3705 (class 2606 OID 41254)
-- Name: concerts concerts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.concerts
    ADD CONSTRAINT concerts_pkey PRIMARY KEY (id);


--
-- TOC entry 3699 (class 2606 OID 41223)
-- Name: guests guests_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.guests
    ADD CONSTRAINT guests_email_key UNIQUE (email);


--
-- TOC entry 3701 (class 2606 OID 41221)
-- Name: guests guests_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.guests
    ADD CONSTRAINT guests_pkey PRIMARY KEY (id);


--
-- TOC entry 3707 (class 2606 OID 41274)
-- Name: program program_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.program
    ADD CONSTRAINT program_pkey PRIMARY KEY (guest_id, concert_id);


--
-- TOC entry 3695 (class 2606 OID 41286)
-- Name: stages stages_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_name_key UNIQUE (name);


--
-- TOC entry 3697 (class 2606 OID 41244)
-- Name: stages stages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.stages
    ADD CONSTRAINT stages_pkey PRIMARY KEY (id);


--
-- TOC entry 3708 (class 2606 OID 41257)
-- Name: concerts concerts_artist_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.concerts
    ADD CONSTRAINT concerts_artist_id_fkey FOREIGN KEY (artist_id) REFERENCES public.artists(id);


--
-- TOC entry 3709 (class 2606 OID 41262)
-- Name: concerts concerts_stage_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.concerts
    ADD CONSTRAINT concerts_stage_id_fkey FOREIGN KEY (stage_id) REFERENCES public.stages(id);


--
-- TOC entry 3710 (class 2606 OID 41280)
-- Name: program program_concert_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.program
    ADD CONSTRAINT program_concert_id_fkey FOREIGN KEY (concert_id) REFERENCES public.concerts(id);


--
-- TOC entry 3711 (class 2606 OID 41275)
-- Name: program program_guest_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.program
    ADD CONSTRAINT program_guest_id_fkey FOREIGN KEY (guest_id) REFERENCES public.guests(id);


-- Completed on 2026-11-27 14:45:44 CET

--
-- PostgreSQL database dump complete
--

