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
        <View style={styles.products}>
          {menu.categories[0].products.map((product, index) => {
            return (
              <View key={`${product.name}_${index}`} style={styles.itemWrapper}>
                <View style={styles.itemWrapper2}>
                  <Text style={styles.productName}>{product.name}</Text>
                  <Text style={styles.productDescription}>
                    {product.description}
                  </Text>
                </View>
                <Text style={styles.productPrice}>{product.price} €</Text>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default MenuPDF;
