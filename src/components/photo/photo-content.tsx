"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PhotoData } from "@/actions/photo-get";
import { useUser } from "@/context/user-context";

import Title from "../titles/title";
import PhotoComments from "./photo-comments";
import styles from "./photo-content.module.css";
import PhotoDelete from "./photo-delete";

const PhotoContent = ({
  data,
  single,
}: {
  data: PhotoData;
  single: boolean;
}) => {
  const { user } = useUser();
  const { photo, comments } = data;

  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} width={1000} height={1000} />
      </div>

      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user && user.username === photo.author ? (
              <PhotoDelete id={String(photo.id)} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>

          <Title>
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </Title>

          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>

      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
