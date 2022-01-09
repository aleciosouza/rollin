import { GetServerSideProps } from "next";
import EventList from "../../components/Event/EventList";
import HomeHeader from "../../components/Home/HomeHeader";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <EventList />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {},
});

export default Home;
