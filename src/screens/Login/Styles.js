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
  containerTopo: {
    flexDirection: "row",
    width: "100%",
  },
  image: {
    width: 100,
    height: 50,
  },
  privacid: {
    flex: 1,
    color: "black",
    fontSize: 14,
    textAlign: "right",
    alignSelf: "center",
  },
  descricaoF: {
    marginTop: 15,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 45,
    fontWeight: "700",
    paddingBottom: 5,
    color: "black",
    fontSize: 35,
    textAlign: "center",
  },
  descricao: {
    paddingBottom: 40,
    color: "black",
    fontSize: 15,
    paddingVertical: 20,
    paddingHorizontal: 45,
    textAlign: "center",
  },
  buscaBox: {
    alignContent: "center",
    width: "100%",
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
    marginBottom: 15,
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