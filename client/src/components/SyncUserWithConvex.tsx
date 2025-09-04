import { useUser } from '@clerk/clerk-react';
import { useMutation } from 'convex/react';
import { useEffect } from 'react';
import { api } from '../../convex/_generated/api';

const SyncUserWithConvex = () => {
  const { user } = useUser();
  const updateUser = useMutation(api.controllers.user.updateUser);
  // const verification = user?.hasVerifiedEmailAddress;
  useEffect(() => {
    if (!user) return;
    const syncUser = async () => {
      try {
        await updateUser({
          userId: user.id,
          username: `${user.username ?? ''} ${user.lastName ?? ''}`.trim(),
          email: user.emailAddresses[0]?.emailAddress ?? '',
        });
      } catch (error) {
        throw new Error('Failed to sync user with Convex: ' + error);
      }
    };
    syncUser();
  }, [user, updateUser]);
  return null;
};

export default SyncUserWithConvex;
