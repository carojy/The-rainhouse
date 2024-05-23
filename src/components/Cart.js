function Cart(){
    const monstera = 20
    const lierre = 10
    const bouquetFleurs = 15
    
    return (<div> 
        <h2>Panier</h2>
        <ul>
            <li>Monstera : {monstera} €</li>
            <li>Lierre : {lierre} €</li>
            <li>Bouquet de fleurs : {bouquetFleurs} €</li>
        </ul>
        Total : {monstera+lierre+bouquetFleurs} €
        </div>)
    }

    export default Cart