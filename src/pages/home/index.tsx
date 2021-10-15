import { GetServerSideProps } from "next";
import EventList from "../../components/Event/EventList";
import HomeHeader from "../../components/Home/HomeHeader";
import Menu from "../../components/Menu/Menu";

const Home = () => {
  return (
    <>
      <Menu />
      <HomeHeader />
      <EventList />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => ({
  props: {},
});

export default Home;
