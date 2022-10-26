import Layout from "../components/Layout";

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
            <Layout title="Curso React">
                <span>Conteúdo</span>
            </Layout>
        </div>
    );
}

export default Home;