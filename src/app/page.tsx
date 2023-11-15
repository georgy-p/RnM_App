import Form from "components/form/Form";
import { FC } from "react";
import FoundEpisodes from "components/foundEpisodes/FoundEpisodes";

const Page: FC = () => {
  return (
    <div>
      <Form />
      <FoundEpisodes />
    </div>
  );
};

export default Page;
