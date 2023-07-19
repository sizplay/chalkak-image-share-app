SET check_function_bodies = false;
CREATE TABLE public.accounts (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at bigint,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    oauth_token_secret text,
    oauth_token text,
    "userId" uuid NOT NULL,
    refresh_token_expires_in integer
);
CREATE TABLE public.album (
    album_id integer NOT NULL,
    title character varying(100) NOT NULL,
    subtitle character varying(200),
    main_image_id integer,
    created_by uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    is_shared boolean DEFAULT false NOT NULL,
    icon text,
    background text
);
COMMENT ON TABLE public.album IS '사진앨범';
CREATE SEQUENCE public.album_album_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.album_album_id_seq OWNED BY public.album.album_id;
CREATE TABLE public.image (
    image_id integer NOT NULL,
    album_id integer NOT NULL,
    path character varying(200) NOT NULL,
    size integer,
    width integer,
    height integer,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.image IS '이미지';
CREATE SEQUENCE public.image_image_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.image_image_id_seq OWNED BY public.image.image_id;
CREATE TABLE public.sessions (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" uuid NOT NULL,
    expires timestamp with time zone
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text,
    email text,
    "emailVerified" timestamp with time zone,
    image text
);
CREATE TABLE public.verification_tokens (
    token text NOT NULL,
    identifier text NOT NULL,
    expires timestamp with time zone
);
ALTER TABLE ONLY public.album ALTER COLUMN album_id SET DEFAULT nextval('public.album_album_id_seq'::regclass);
ALTER TABLE ONLY public.image ALTER COLUMN image_id SET DEFAULT nextval('public.image_image_id_seq'::regclass);
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_pkey PRIMARY KEY (album_id);
ALTER TABLE ONLY public.image
    ADD CONSTRAINT image_pkey PRIMARY KEY (image_id);
ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.verification_tokens
    ADD CONSTRAINT verification_tokens_pkey PRIMARY KEY (token);
ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_main_image_id_fkey FOREIGN KEY (main_image_id) REFERENCES public.image(image_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE RESTRICT ON DELETE CASCADE;
