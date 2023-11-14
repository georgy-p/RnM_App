import "../styles/global.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Form from "components/form/Form";
import { FC } from "react";
import FoundEpisodes from "components/foundEpisodes/FoundEpisodes";

const Page: FC = () => {
  return (
    <div className="container">
      <Image
        priority={false}
        src={logo}
        alt="Rick and Morty logo"
        width={300}
        height={90}
      />
      <Form />
      <FoundEpisodes />
    </div>
  );
};

export default Page;
