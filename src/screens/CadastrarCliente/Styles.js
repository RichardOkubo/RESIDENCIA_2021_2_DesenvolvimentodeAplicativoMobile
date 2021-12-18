import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  descricaoF: {
    marginVertical: 5,
    paddingHorizontal: 0,
    fontWeight: "700",
    paddingBottom: 10,
    color: "black",
    fontSize: 22,
    textAlign: "center",
  },
  buscaBox: {
    alignContent: "center",
    width: "100%",
    paddingBottom: 15
  },
  buscaInput: {
    width: "100%",
    height: 50,
    marginBottom: 15,
    padding: 10,
    textAlign: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#757575",
    fontSize: 16,
    borderRadius: 30,
    backgroundColor: "white",
  },
  buttonRed: {
    width: "100%",
    height: 50,
    borderRadius: 30,
    backgroundColor: "#E50914",
  },
  buttonTextoRed: {
    height: 50,
    alignSelf: "center",
    textAlignVertical: "center",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 16,
    color: "white",
  },
});

export default styles;