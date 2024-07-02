import { View, Text } from '@react-pdf/renderer';

import { styles } from './styles';
import { MenuFormItem } from '@/schemas/menuForm';

type ItemProps = {
  item: MenuFormItem;
};

const Item = ({ item }: ItemProps) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemWrapper}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <Text style={styles.itemPrice}>{item.price.toFixed(2)} €</Text>
    </View>
  );
};

export default Item;
