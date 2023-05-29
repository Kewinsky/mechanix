package com.mechanix.mechanix.utils;

import java.util.Random;

public class RandomIdGenerator {
    public static Long generateRandomId() {
        Random random = new Random();
        long randomNumber = random.nextInt(900000) + 100000;

        return randomNumber;
    }
}
