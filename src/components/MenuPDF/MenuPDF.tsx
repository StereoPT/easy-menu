import { Font, Document, Page, View, Text } from '@react-pdf/renderer';

import { useAtomValue } from 'jotai';
import { menuAtom } from '@/store/menu.atom';

import Category from './Category';

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
        <View style={styles.content}>
          {menu.categories.map((category, index) => (
            <Category key={`category_${index}`} category={category} />
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default MenuPDF;
