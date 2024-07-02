import { View, Text } from '@react-pdf/renderer';

import Item from './Item';

import { styles } from './styles';
import { MenuFormCategory } from '@/schemas/menuForm';

type CategoryProps = {
  category: MenuFormCategory;
};

const Category = ({ category }: CategoryProps) => {
  return (
    <View style={styles.category}>
      <Text style={styles.categoryName}>{category.name}</Text>
      <View style={styles.items}>
        {category.items.map((item, index) => (
          <Item key={`${item.name}_${index}`} item={item} />
        ))}
      </View>
    </View>
  );
};

export default Category;
