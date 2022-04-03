import React, { useCallback, useContext, useState } from "react";
import {
  MdOutlinePermMedia,
  MdEditCalendar,
  MdOutlineRoom,
} from "react-icons/md";
import { useDropzone, FileError, FileRejection } from "react-dropzone";
import { BiLabel } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { AuthContext } from "../../../context/AuthContext";
import { useForm } from "react-hook-form";
import { PostSniggerArgs, Snigger } from "../../../types";
import { UploadItems } from "./upload/UploadItem";
import { useMutation } from "@apollo/client";
import { POSTSNIGGER, SNIGGERTIMELINE } from "../../../graphql/Snigger";
import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner';
import Image from 'next/image';


interface Props {}

export interface UploadableFile {
  file: File;
  errors: FileError[];
  url?: string;
}

const Share: React.FC<Props> = () => {
  const { loggedInUser } = useContext(AuthContext);
  const router = useRouter();

  //Select File
  const [files, setFiles] = useState<UploadableFile[]>([]);

  //Create form data
  const {register, handleSubmit, formState: { errors }} = useForm<PostSniggerArgs>();

  //create backen post snigger function
  const [postSnigger, { loading, error }] = useMutation<{ postSnigger: Snigger}, PostSniggerArgs>(POSTSNIGGER);


  //Select files and upload to cloud storage
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));

    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);


  //React Dropzone use to upload file to storage
  const { getRootProps, getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    multiple: true,
    onDrop,
  });

  //function upload file to cloud
  function onUploaded(file: File, url: string) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }

        return fw;
      })
    );
  }


  //Function Delete file
  function onDelete(file: File) {
    setFiles(curr => curr.filter(fw => fw.file !== file))
  }

  //Save data to database
  const handlePostSnigger = handleSubmit( async ({ content }) => {
    try {
      if(files) {
        const results = await postSnigger({ variables: { content, media: files[0].url}, refetchQueries: [{ query: SNIGGERTIMELINE }]});


        if(results.data.postSnigger) {
          const { postSnigger } = results.data;

          if(postSnigger) {
            router.push('/')
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  });


  return (
    <div className="share">
      <form onSubmit={handlePostSnigger}>
        <div className="share__wrapper">
          <div className="share__wrapper__top">
            {!loggedInUser.image ? (
              <Image
                className="user__profile"
                src="https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png"
                width={64}
                height={64}
                alt=""
              />
            ) : (
              <Image
                className="user__profile"
                src={loggedInUser.image}
                width={64}
                height={64}
                alt=""
              />
            )}

            <input
              name="content"
              type="text"
              className="share__input"
              placeholder={`What's on your snigger @${loggedInUser.username}?`}
              {...register("content", { required: true })}
            />

            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
            </div>
          </div>
          {errors.content && (
            <span className="errorMessage">Content field is required</span>
          )}
          <hr className="share__hr" />
          <div className="post__preview__media">
            {
              files.map((fileWrapper, idx) => (
                <UploadItems 
                  onDelete={onDelete}
                  onUploaded={onUploaded}
                  key={idx}
                  file={fileWrapper.file}
               />
              ))
            }
          </div>

          <div className="share__wrapper__bottom">
            <div className="share__options">
              <div className="share__option__item">
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                </div>
                <MdOutlinePermMedia className="share__icon" onClick={open} />
                <span className="share__option__text">Media</span>
              </div>
              <div className="share__option__item">
                <MdEditCalendar className="share__icon" />
                <span className="share__option__text">Events</span>
              </div>
              <div className="share__option__item">
                <BsEmojiSmile className="share__icon" />
                <span className="share__option__text">Feelings</span>
              </div>
              <div className="share__option__item">
                <BiLabel className="share__icon" />
                <span className="share__option__text">Tags</span>
              </div>
              <div className="share__option__item">
                <MdOutlineRoom className="share__icon" />
                <span className="share__option__text">Checkin</span>
              </div>
            </div>

            <button 
              className="btn__share"
              disabled={loading}
              style={{ cursor: loading ? "not-allowed" : "pointer" }}
            >
              {
                loading ? (
                  <Loader 
                    type="Oval"
                    color="teal"
                    height={30}
                    width={30}
                    timeout={3000}
                  />
                ):(
                  "Spread"
                )
              }
            </button>
            
          </div>
          {
              error && (
                error.graphQLErrors[0]?.message || (
                  <p style={styles.errorMessage}>Sorry, something went wrong...Ops!</p>
                )
              )
            }
        </div>
      </form>
    </div>
  );
};


const styles = {
  errorMessage: {
    margin: 0,
    padding: 5,
    color: "red",
    fontSize: ".5rem"
  }
}
export default Share;
