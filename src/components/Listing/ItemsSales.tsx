
const checkCurrency = (price: number, currency_code: string) => {
    if (currency_code === 'USD') {
        return '$' + price
    } else if (currency_code === 'EUR') {
        return '€' + price
    } else if (currency_code === 'GBP') {
        return '£' + price
    }
}

const checkTitleLength = (title: string) => {
    if (title.length > 50) {
        return title.substring(0, 50) + '...'
    }
    return title
}

const checkQuantity = (quantity: number) => {

    if (quantity <= 10) {
        return <p className="item-quantity level-low">{quantity} items</p>
    } else if (quantity <= 20 && quantity > 10) {
        return <p className="item-quantity level-medium">{quantity} items</p>
    } else if (quantity > 20) {
        return <p className="item-quantity level-high">{quantity} items</p>
    }
}

export const ItemsSales = ({ items  } : any ) => {
    console.log('ItemsSales')
    console.log({items})
    if (typeof items.title === 'undefined') {
        return null
    }
    return (
            <div className="item">
                <div className="item-image">
                <a href={items.url}>
                    <img src={items.MainImage.url_570xN} />
                </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{checkTitleLength(items.title)}</p>
                    <p className="item-price">{checkCurrency(items.price, items.currency_code)}</p>
                    {checkQuantity(items.quantity)}
                </div>
            </div>


    )
}
