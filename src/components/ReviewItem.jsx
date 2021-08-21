import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
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

const ReviewItem = ({ item, myReview }) => {

    if (!item) {
        return null;
    }

    return (
        <ListItem key={item.node.id} bottomDivider>           
            <View style={styles.mainContainer}>
                <View style={styles.descContainer}>
                    <View style={styles.circle}>
                        <Text fontWeight='bold' fontSize='subheading'>{item.node.rating}</Text>
                    </View>
                    {myReview ?
                        <Text fontWeight='bold' fontSize='subheading'>{item.node.repository.fullName}</Text>
                        :
                        <Text fontWeight='bold' fontSize='subheading'>{item.node.user.username}</Text>
                    }
                </View>
                <View style={styles.descContainer}>
                    <View style={{ marginLeft: 50, }}>
                        <Text>{formatDate(item.node.createdAt)}</Text>
                        <Text>{item.node.text}</Text>
                    </View>
                </View>
            </View>
        </ListItem>
    );
};

export default ReviewItem;