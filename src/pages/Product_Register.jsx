import Header from "../components/header";
import Side_bar from "../components/Menu";


function Product_Registeration() {
    return (
        <div>
            <Header />

            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'flex-start'
            }}>
                <Side_bar onSelect={(key) => {
                    console.log("Selected:", key);
                }} />
                <div style={{
                    width: '80%'
                }}>
                </div>
            </div>

        </div >
    )
}

export default Product_Registeration