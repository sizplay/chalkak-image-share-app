SET check_function_bodies = false;
CREATE TABLE public.album (
    album_id integer NOT NULL,
    title character varying(100) NOT NULL,
    subtitle character varying(200),
    main_image_id integer,
    created_by integer NOT NULL,
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
CREATE TABLE public."user" (
    user_id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(100) NOT NULL
);
COMMENT ON TABLE public."user" IS '사용자';
CREATE SEQUENCE public.user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_user_id_seq OWNED BY public."user".user_id;
ALTER TABLE ONLY public.album ALTER COLUMN album_id SET DEFAULT nextval('public.album_album_id_seq'::regclass);
ALTER TABLE ONLY public.image ALTER COLUMN image_id SET DEFAULT nextval('public.image_image_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN user_id SET DEFAULT nextval('public.user_user_id_seq'::regclass);
ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_pkey PRIMARY KEY (album_id);
ALTER TABLE ONLY public.image
    ADD CONSTRAINT image_pkey PRIMARY KEY (image_id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);
ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_created_by_fkey FOREIGN KEY (created_by) REFERENCES public."user"(user_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.album
    ADD CONSTRAINT album_main_image_id_fkey FOREIGN KEY (main_image_id) REFERENCES public.image(image_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
