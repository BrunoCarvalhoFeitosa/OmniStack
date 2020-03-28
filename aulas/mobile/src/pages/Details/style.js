import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        marginTop: 48,
        marginBottom: 16,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },

    incidentProperty: {
        marginTop: 24,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#41414D',
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380',
    },

    contactBox: {
        
        marginBottom: 16,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },

    heroTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#13131A',
        lineHeight: 30,
    },

    heroDescription: {
        marginTop: 16,
        fontSize: 15,
        color: '#737380',
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        width: '48%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF',
    },
});