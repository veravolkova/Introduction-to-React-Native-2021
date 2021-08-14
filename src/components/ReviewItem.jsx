// import { setNestedObjectValues } from 'formik';
import React from 'react';
import Button from './Button';
import { Alert, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import useDeleteReview from '../hooks/useDeleteReview';
import useRepository from '../hooks/useRepository';
import * as Linking from 'expo-linking';
import Text from '../components/Text';

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        padding: 5,
    },
    descContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    circle: {
        borderRadius: 20,
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 10,
    },
    reviewExtra: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 10,
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 10,
    },
});

const formatDate = (dateToConvert) => {
    const date = new Date(dateToConvert);
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
};


const ReviewItem = ({ item }) => {
    const [deleteReview] = useDeleteReview();
    const { getRepository } = useRepository();

    const createAlert = () =>
        Alert.alert(
            'Delete review',
            'Are you sure you want to delete this review',
            [
                {
                    text: 'Cancel',
                    onPress: () => false,
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => true }
            ]
        );

    if (!item) {
        return null;
    }

    const redirectUrl = (url) => {
        console.log(url);
        Linking.openURL(url);
    };

    const handleDelete = async (id) => {
        // const result = createAlert(); 
        // if(result) {        
            await deleteReview({ id });
            await getRepository(item.id);
        // };
    };

    return (
        <ListItem key={item.node.id} bottomDivider>
            <View style={styles.mainContainer}>
                <View style={styles.descContainer}>
                    <View style={styles.circle}>
                        <Text fontWeight='bold' fontSize='subheading'>{item.node.rating}</Text>
                    </View>
                    <Text fontWeight='bold' fontSize='subheading'>{item.node.user.username}</Text>
                </View>
                <View style={styles.descContainer}>
                    <View style={{ marginLeft: 50, }}>
                        <Text>{formatDate(item.node.createdAt)}</Text>
                        <Text>{item.node.text}</Text>
                    </View>
                </View>
                <View style={styles.buttonGroup}>
                    <Button style={{ width: 50 }} text="View Repository" onPress={() => redirectUrl(item.url)} />
                    <Button style={{ width: 50 }} text="Delete review" onClick={handleDelete(item.node.id)} />
                </View>
            </View>
        </ListItem>
    );
};

export default ReviewItem;