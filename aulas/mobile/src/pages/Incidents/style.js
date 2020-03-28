import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


//Exporting stylesheet to Incidents
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

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headertextBold: {
        fontWeight: 'bold',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 48,
        marginBottom: 16,
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },

    incidentList: {
        marginTop: 32,
    },

    incident: {
        marginBottom: 16,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        marginBottom: 24,
        fontSize: 15,
        color: '#737380',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#E02041',
    },

});