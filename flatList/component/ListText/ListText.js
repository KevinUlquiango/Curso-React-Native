import { useContext, useEffect } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { WrapperItemPerson, WrapperButton } from "./style";
import UserContext from "./../../hooks/UserContext";
export const ListText = (props) => {
  const { setDataUser, isNew, getDataUser } = useContext(UserContext);
  const { styles, stylesGeneral, element, dataPerson } = props;
  const isTypeObject = typeof element == "object" ? true : false;
  const index = element.index;
  useEffect(() => {
    getDataUser();
  }, [index]);
  return (
    <View style={styles}>
      <View style={{ flexDirection: "column", flex: 5 }}>
        {!isTypeObject ? (
          <>
            <WrapperItemPerson key={element}>
              {element}
            </WrapperItemPerson>
          </>
        ) : (
          Object.keys(element.item).map(
            (elem) =>
              elem != "id" && (
                <WrapperItemPerson key={Math.random()}>
                  {`${element.item[elem]} `}
                </WrapperItemPerson>
              )
          )
        )}
      </View>

      {isTypeObject && (
        <>
          <WrapperButton
            style={{
              flexDirection: "row",
              flex: 2
            }}
          >
            <TouchableHighlight
              onPress={() => {
                isNew(false);
                setDataUser(element);
              }}
              style={stylesGeneral.btnCheck}
            >
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#fff" }}
              />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                isNew(true);
                dataPerson.splice(index,1);
              }}
              style={stylesGeneral.btnTrash}
            >
              <FontAwesomeIcon
                icon={faTrash}
                style={{ color: "#fff" }}
              />
            </TouchableHighlight>
          </WrapperButton>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
