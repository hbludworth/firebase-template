import UserDao from '@/daos/UserDao';

const instances: { [key: string]: any } = {};

export type ServiceTypes = {
  UserDao: typeof UserDao;
};

export default {
  set<K extends keyof ServiceTypes, V extends ServiceTypes[K]>(
    instanceId: K,
    instance: V
  ): void {
    instances[instanceId] = instance;
  },

  get<K extends keyof ServiceTypes, V extends ServiceTypes[K]>(
    instanceId: K
  ): V {
    return instances[instanceId];
  },
};
