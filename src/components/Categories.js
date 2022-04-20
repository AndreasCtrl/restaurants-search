import { FlatList } from 'react-native';
import { View } from 'react-native';
import CategoryItem from './CategoryItem';

export default function Categories({ categories, term, setTerm }) {
    return (
        <View>
            <FlatList
                data={categories}
                renderItem={({ item, index }) => {
                    return (
                        <CategoryItem
                            name={item.name}
                            imageUrl={item.imageUrl}
                            index={index}
                            active={item.name === term}
                            handlePress={() => setTerm(item.name)}
                        />
                    )
                }}
                keyExtractor={item => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
