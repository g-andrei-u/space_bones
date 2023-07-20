import wings from '../../Img/wings.jpg';
import burgers from '../../Img/burgers.jpg';
import ss from '../../Img/rsz.jpg';
import kids from '../../Img/Kids.jpg';
import sides from '../../Img/sides.jpg';
import drinks from '../../Img/drinks.jpg';


interface MenuItems {
    path: string,
    name: string,
    image: string
}

export const menuItems: MenuItems[] = [
    {
        path: '/burgers',
        name: 'burgers',
        image: burgers
    }, 

    {
        path: '/wings',
        name: 'wings',
        image: wings
    },

    {
        path: '/salads',
        name: 'salads & soups',
        image: ss
    },

    {
        path: '/sides',
        name: 'sides',
        image: sides
    }, 

    {
        path: '/kids',
        name: 'kids',
        image: kids
    },

    {
        path: '/drinks',
        name: 'drinks',
        image: drinks
    }
]