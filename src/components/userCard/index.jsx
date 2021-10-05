import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { useState } from "react";
const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div>
      <p>
        O nome do usuário é: {user.name !== "" ? user.name : "<não definido>"}{" "}
      </p>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={() => handleClick()}>Change</button>
    </div>
  );
};

export default UserCard;
