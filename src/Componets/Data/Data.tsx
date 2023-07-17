import wings from '../../Img/wings.jpg';
import burgers from '../../Img/burgers.jpg';
import ss from '../../Img/rsz.jpg';
import kids from '../../Img/Kids.jpg';
import sides from '../../Img/sides.jpg';
import drinks from '../../Img/drinks.jpg';


interface MenuItems {
    name: string,
    image: string
}

export const menuItems: MenuItems[] = [
    {
        name: 'burgers',
        image: burgers
    }, 

    {
        name: 'wings',
        image: wings
    },

    {
        name: 'salads & soups',
        image: ss
    },

    {
        name: 'sides',
        image: sides
    }, 

    {
        name: 'kids',
        image: kids
    },

    {
        name: 'drinks',
        image: drinks
    }
]