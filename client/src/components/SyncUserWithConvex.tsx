import { useUser } from '@clerk/clerk-react';
import { useMutation } from 'convex/react';
import { useEffect } from 'react';
import { api } from '../../convex/_generated/api';

const SyncUserWithConvex = () => {
  const { user, isLoaded } = useUser();
  const updateUser = useMutation(api.controllers.user.updateUser);

  useEffect(() => {
    if (!isLoaded || !user) return;

    // Ensure safe values
    const userId = user.id;
    const emailStr = user.emailAddresses?.[0]?.emailAddress ?? '';
    const usernameStr = `${user.username ?? ''} ${user.lastName ?? ''}`.trim() || 'Anonymous';

    // Don’t sync if critical info is missing
    if (!userId || !emailStr) {
      return;
    }

    const syncUser = async () => {
      try {
        await updateUser({
          userId,
          username: usernameStr,
          email: emailStr,
        });
      } catch (error) {
        throw new Error('Failed to sync user with Convex: ' + error);
      }
    };

    syncUser();
  }, [user, isLoaded, updateUser]);

  return null;
};

export default SyncUserWithConvex;
