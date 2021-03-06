import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    safeview: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 20,
    },
    logo: {
        fontFamily: 'BebasNeue',
        fontSize: 18,
        fontWeight: '400',
        color: '#FFF',
    
    },
    pageTitle: {
        fontFamily: 'BebasNeue',
        fontSize: 36,
        fontWeight: '400',
       
        
    
    },
    pageSubtitle: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '400',
        color: '#FFF',
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        borderRadius: 25,
        height: 40,
        width: '100%',
        padding: 10,
        marginTop: 5,
    },
    titleInput: {
        fontSize: 15,
        fontFamily: 'BebasNeue',
        color: '#D35400',
        fontWeight: '400',
        marginLeft: 15
    },
    button: {
        backgroundColor: '#D35400',
        borderRadius: 25,
        justifyContent: 'center',
        height: 40,
        width: '100%'
    },
    buttonBoard: {
        backgroundColor: '#FFF',
        borderRadius: 25,
        justifyContent: 'center',
        height: 40,
        width: '100%'
    },
    textButton: {
        fontSize: 21,
        fontFamily: 'BebasNeue',
        color: '#FFF',
        fontWeight: '700',
        textAlign: 'center',
    },
    textButtonBoard: {
        fontSize: 21,
        fontFamily: 'BebasNeue',
        color: '#000',
        fontWeight: '700',
        textAlign: 'center',
    },
    card: {
        width: 170,
        borderRadius: 10,
        backgroundColor: '#D35400',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    title: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10,
        marginLeft: 10,
    },
    number: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 10,
        width: 50,
        
    },
    name: {
        fontFamily: 'BebasNeue',
        fontSize: 25,
        fontWeight: '400',
        marginHorizontal: 10,
        
    },
    price: {
        fontFamily: 'BebasNeue',
        fontSize: 18,
        color: '#FFF',
        fontWeight: '400',
        marginHorizontal: 10,
    },
    description: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10,
        
    },
    remove: {
        marginLeft: 10,
        width: 30,
        height: 30,
        tintColor: '#FFF',
        backgroundColor: '#D35400',
        borderRadius: 5,
    },
});

