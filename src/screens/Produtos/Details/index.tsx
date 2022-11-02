import { FlatList, Image, ScrollView, View } from 'react-native';
import { Button, Caption, Headline, Menu, Text, Title } from 'react-native-paper';

import { currencyMask } from '@components/Form/masks/currency';
import useProdutoDetails from './useProdutoDetails';
import styles from './styles';
import type { ProdutoDetailsProps } from './types';

const ProdutoDetails = ({}: ProdutoDetailsProps) => {
  const { produto, menuQtd, onAddToCart, onDismissMenuQtd, onSetQtd, onOpenMenuQtd } =
    useProdutoDetails();

  if (!produto) return null;

  return (
    <ScrollView style={styles.container}>
      <Caption style={styles.subtitle}>{produto.categoria.nome}</Caption>
      <Headline>{produto.nome}</Headline>

      <View style={styles.imageList}>
        <FlatList
          data={produto.imagens.map((img, index) => ({ key: `img${index}`, img }))}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.img?.imagem }} style={styles.image} />
            </View>
          )}
        />
      </View>

      <Title style={styles.price}>{currencyMask(produto.precoUnitario)}</Title>

      {produto.estoque ? (
        <View style={styles.withStockContainer}>
          <Title style={styles.withStock}>Em Estoque</Title>
          <Caption>({produto.estoque}) disponíveis</Caption>
        </View>
      ) : (
        <Title style={styles.noStock}>Sem Estoque</Title>
      )}

      <View style={styles.buttonBuyContainer}>
        <Menu
          visible={menuQtd.visible}
          onDismiss={onDismissMenuQtd}
          anchor={
            <Button mode="outlined" onPress={onOpenMenuQtd}>
              Qtd ({menuQtd.qtd})
            </Button>
          }>
          <ScrollView style={styles.menuQtd}>
            {new Array(produto.estoque).fill(1).map((_, index) => (
              <Menu.Item key={index} title={index + 1} onPress={() => onSetQtd(index + 1)} />
            ))}
          </ScrollView>
        </Menu>

        <Button
          mode="contained"
          disabled={!produto.estoque}
          style={styles.buttonBuy}
          onPress={() => onAddToCart(produto)}>
          Adicionar ao carrinho
        </Button>
      </View>

      <View style={styles.descriptionContainer}>
        <Title>Descrição</Title>

        <Text style={styles.description}>{produto.descricao}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Title>Informações sobre o produto</Title>

        <View style={styles.info}>
          <Text>Categoria: {produto.categoria.nome}</Text>
          {produto.altura && <Text>Altura: {produto.altura} cm</Text>}
          {produto.comprimento && <Text>Comprimento: {produto.comprimento} cm</Text>}
          {produto.largura && <Text>Largura: {produto.largura} cm</Text>}
          {produto.marca && <Text>Marca: {produto.marca}</Text>}
          {produto.modelo && <Text>Modelo: {produto.modelo}</Text>}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProdutoDetails;
