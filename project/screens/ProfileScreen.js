import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.form}>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Електронна пошта</Text>
          <TextInput
            editable
            keyboardType="email-address"
            style={styles.formInput}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Пароль</Text>
          <TextInput editable secureTextEntry={true} style={styles.formInput} />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Пароль (ще раз)</Text>
          <TextInput editable secureTextEntry={true} style={styles.formInput} />
        </View>
        <View style={styles.formItem}>
          <View style={styles.additionalSpace}>
            <Text style={styles.formLabel}>Прізвище</Text>
            <TextInput editable style={styles.formInput} />
          </View>
          <View style={styles.additionalSpace}>
            <Text style={styles.formLabel}>Ім`я</Text>
            <TextInput editable style={styles.formInput} />
          </View>
        </View>
        <View style={styles.formItem}>
          <Button title="Зареєструватися" color="#0076ff" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 15,
    fontWeight: "500",
  },
  form: {
    paddingHorizontal: 15,
    gap: 15,
  },
  formItem: {
    gap: 10,
  },
  formLabel: {
    fontSize: 16,
  },
  formInput: {
    borderColor: "#c9c9c9",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    fontSize: 15,
  },
  additionalSpace: {
    paddingTop: 10,
  },
});

export default ProfileScreen;
