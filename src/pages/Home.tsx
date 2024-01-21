import { useTranslation } from "react-i18next";


const Home: React.FC = () => {
    const {t} = useTranslation();
    return (
        <div>
            <h1>{t("example-h1")}</h1>
        </div>
    )
}

export default Home;