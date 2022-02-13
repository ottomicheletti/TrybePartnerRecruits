import styles from './styles.module.scss';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';

export function SignGit() {
  const [session] = useSession();

  return session ? (
    <button type="button" className={styles.gitButton} onclick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
    </button>
  ) : (
    <button type="button" className={styles.gitButton} onclick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Login com GitHub
    </button>
  );
}
