import axios from 'axios';
import { API_URL } from '../constants';
import { validateHitAccept } from '../utils/parsing';

export const validateHitAcceptRequest = async (groupId: string) => {
  try {
    const response = await axios.get<Document>(
      `${API_URL}/mturk/previewandaccept?groupId=${groupId}`,
      {
        params: {
          groupId
        },
        responseType: 'document'
      }
    );
    return validateHitAccept(response.data);
  } catch (e) {
    return false;
  }
};
