import { View } from 'react-native';
import { Button, Title } from 'react-native-paper';

import useEnderecos from './useEnderecos';
import EnderecoItem from './EnderecoItem';
import EnderecoOptions from './EnderecoOptions';

const Enderecos = () => {
  const {
    enderecosList,
    enderecoOptions,
    onAdd,
    onDismissDialog,
    enderecoSelecionado,
    onPressItem,
  } = useEnderecos();

  return (
    <View>
      <Title>Endereços para entrega</Title>

      <View>
        {enderecosList.map(endereco => (
          <EnderecoItem
            key={endereco.nome}
            endereco={endereco}
            onPress={() => onPressItem(endereco)}
          />
        ))}
      </View>

      {enderecosList.length < 3 && (
        <Button mode="outlined" onPress={onAdd} style={{ marginTop: 15 }}>
          Adicionar endereço
        </Button>
      )}

      <EnderecoOptions
        visible={!!enderecoSelecionado}
        enderecoOptions={enderecoOptions}
        onDismiss={onDismissDialog}
      />
    </View>
  );
};

export default Enderecos;
