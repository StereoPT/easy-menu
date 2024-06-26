import { Font, Document, Page, View, Text } from '@react-pdf/renderer';
import { useAtomValue } from 'jotai';

import { menuAtom } from '@/store/menu.atom';

import { styles } from './styles';

Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/Inter-Regular.ttf' },
    { src: '/fonts/Inter-SemiBold.ttf', fontWeight: 'semibold' },
  ],
});

const MenuPDF = () => {
  const menu = useAtomValue(menuAtom);

  return (
    <Document>
      <Page style={styles.page} size="A4" wrap>
        <View style={styles.header} fixed>
          <Text style={styles.title}>{menu.title}</Text>
          <Text style={styles.subtitle}>{menu.subtitle}</Text>
        </View>
        <View style={styles.categories}>
          {menu.categories.map((category, catIndex) => {
            return (
              <View key={`category_${catIndex}`} style={styles.category}>
                <Text>{category.name}</Text>
                <View style={styles.items}>
                  {category.items.map((item, index) => {
                    return (
                      <View
                        key={`${item.name}_${index}`}
                        style={styles.itemWrapper}>
                        <View style={styles.itemWrapper2}>
                          <Text style={styles.itemName}>{item.name}</Text>
                          <Text style={styles.itemDescription}>
                            {item.description}
                          </Text>
                        </View>
                        <Text style={styles.itemPrice}>
                          {item.price.toFixed(2)} €
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default MenuPDF;
