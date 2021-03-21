import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrentUser, unsetCurrentUser } from "./usersSlice";

export function User() {
  const history = useHistory();
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(unsetCurrentUser());
    history.push("/");
  };

  const fullName = () => `${user?.name.first} ${user?.name.last}`;
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="go-back-btn" onClick={goBack}>&#60; Go Back</div>
      <div className="user-profile">
        <div className="user-contact">
          <img src={user?.picture.large} alt={`${fullName()}'s Headshot`} />
          <h2>{fullName()}</h2>
          <p>
            <a href={`mailto:${user?.email}`}>{user?.email}</a>
          </p>
        </div>
        <div className="user-desc">
          <div>
            <div className="label">Phone</div>
            <div className="value"><a href={`tel:${user?.phone}`}>{user?.phone}</a></div>
          </div>
          <div>
            <div className="label">Date of Birth</div>
            <div className="value">{formatDate(user?.dob.date)}</div>
          </div>
          <div className="break"></div>
          <div>
            <div className="label">Address</div>
            <div className="value">{`${user?.location.street.number} ${user?.location.street.name}`}</div>
          </div>
          <div>
            <div className="label">City</div>
            <div className="value">{user?.location.city}</div>
          </div>
          <div>
            <div className="label">State</div>
            <div className="value">{user?.location.state}</div>
          </div>
          <div>
            <div className="label">Country</div>
            <div className="value">{user?.location.country}</div>
          </div>
          <div>
            <div className="label">Zipcode</div>
            <div className="value">{user?.location.postcode}</div>
          </div>
        </div>
      </div>
    </>
  );
}
