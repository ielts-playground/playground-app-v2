import { ChangeEventHandler, Dispatch, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';
import PocketBase from 'pocketbase';

import styles from './Login.module.scss';

const Login = () => {
  const [pb, setPb] = useState<PocketBase>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authReloaded, setAuthReloaded] = useState<boolean>(false);

  function inputChangeHandler(
    setState: Dispatch<SetStateAction<string>>
  ): ChangeEventHandler<HTMLInputElement> {
    return (e) => {
      setState(e.target.value);
    };
  }

  useEffect(() => {
    const base = new PocketBase('https://tuanm.dev/pb');
    base.authStore.onChange(() => setAuthReloaded(true), true);
    setPb(base);
  }, []);

  useEffect(() => {
    authReloaded && setAuthReloaded(false);
  }, [authReloaded]);

  const logIn = async () => {
    try {
      await pb?.collection('users').authWithPassword(email, password);
    } catch {
      alert('Username or Password incorrect!');
    }
  };

  const logOut = () => {
    pb?.authStore.clear();
  };

  const userAvatar = () => {
    if (!pb?.authStore?.model) {
      return '';
    }
    console.log(pb?.authStore);

    return pb.files.getUrl(pb.authStore.model, pb.authStore.model['anh_dai_dien']);
  };

  const userName = () => {
    return pb?.authStore.model!['name'] as string;
  };

  return (
    <>
      {!pb && <>Loading...</>}
      {pb && (
        <>
          {!pb.authStore.isValid && (
            <>
              <input
                className={styles.block}
                placeholder='email'
                onChange={inputChangeHandler(setEmail)}
              />
              <input
                className={styles.block}
                placeholder='password'
                type='password'
                onChange={inputChangeHandler(setPassword)}
              />
              <button onClick={logIn}>Log in</button>
            </>
          )}
          {pb.authStore.isValid && (
            <>
              <Image
                className={styles.small}
                src={userAvatar()}
                alt='avatar'
                width={40}
                height={40}
              />
              <p>Hi {userName()}!</p>
              <button onClick={logOut}>Log out</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Login;
