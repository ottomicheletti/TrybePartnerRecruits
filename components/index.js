import styles from './styles.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';

export function SignGit() {
  // const session = useSession();
  // const session = useSession().session;
  const status = useSession({
    required: true,
    onUnauthenticated() {
      // O usuario nao esta´ autenticado, tratar isto aqui.
    }
  });

  return status ? (
    <button type="button" className={styles.gitButton} onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {status.user}
      Debora
    </button>
  ) : (
    <button type="button" className={styles.gitButton} onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Login com GitHub
    </button>
  );
}
