import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Restaurants from '../components/Restaurants'
import Search from '../components/Search'

export default function HomeScreen() {
    const [term, setTerm] = useState("Burger")

    const commonCategories = [
        { name: "Burger", imageUrl: require("../assets/images/burger.png") },
        { name: "Pizza", imageUrl: require("../assets/images/pizza.png") },
        { name: "Dessert", imageUrl: require("../assets/images/cake.png") },
        { name: "Drinks", imageUrl: require("../assets/images/smoothies.png") },
        { name: "Steak", imageUrl: require("../assets/images/steak.png") },
        { name: "Pasta", imageUrl: require("../assets/images/pasta.png") },
    ]

    return (
        <View style={styles.container}>
            <Header />
            <Search setTerm={setTerm} />
            <Categories categories={commonCategories} term={term} setTerm={setTerm} />
            <Restaurants term={term} />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(253,253,253)',
        flex: 1
    },
});