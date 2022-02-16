import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Input from '../../components/atoms/Input';
import Sidebar from '../../components/organisms/Sidebar';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';

export default function EditProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar: '',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      const jwtToken = atob(token!);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;

      const IMG = process.env.NEXT_PUBLIC_IMAGE;
      userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;

      setUser(userFromPayload);
    }
  }, []);

  const onSubmit = () => {
    console.log('user :>> ', user);
  };

  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="image-upload">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img src={imagePreview} alt="icon upload" width="90" height="90" style={{borderRadius: '100%' }} />
                    ) : (
                      <img src={user.avatar} alt="icon upload" width="90" height="90" style={{borderRadius: '100%' }} />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img: File | null = event.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      return setUser({
                        ...user,
                        avatar: img,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="pt-30">
                <Input
                  label="Full Name"
                  type="text"
                  name="full_name"
                  value={user.name}
                  onChange={(event) => setUser({
                    ...user,
                    name: event.target.value,
                  })}
                />
              </div>
              <div className="pt-30">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  disabled
                  value={user.email}
                />
              </div>
              {/* <div className="pt-30">
                <Input label="Phone" type="tel" name="phone" />
              </div> */}
              <div className="button-group d-flex flex-column pt-50">
                <button
                  type="button"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                  onClick={onSubmit}
                >
                  Save My Profile
                </button>
              </div>
            </form>

          </div>

        </div>
      </main>
    </section>
  );
}
