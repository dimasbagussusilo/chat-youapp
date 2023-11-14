import { Injectable } from "@nestjs/common";
import { CreateChatDto } from "./dto/create-chat.dto";
import { UpdateChatDto } from "./dto/update-chat.dto";
import { ChatsRepository } from "./chats.repository";

@Injectable()
export class ChatsService {
  constructor(private readonly chatsRepository: ChatsRepository) {}

  async create(createChatDto: CreateChatDto) {
    return this.chatsRepository.create(createChatDto);
  }

  async findAll() {
    return this.chatsRepository.find({});
  }

  async findOne(_id: string) {
    return this.chatsRepository.findOne({ _id });
  }

  async update(_id: string, updateChatDto: UpdateChatDto) {
    return this.chatsRepository.findOneAndUpdate(
      { _id },
      { $set: updateChatDto },
    );
  }

  async remove(_id: string) {
    return this.chatsRepository.findOneAndDelete({ _id });
  }
}
