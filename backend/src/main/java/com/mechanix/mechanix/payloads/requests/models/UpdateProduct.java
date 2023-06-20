package com.mechanix.mechanix.payloads.requests.models;

import com.mechanix.mechanix.models.enums.ECategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateProduct {

    private String name;

    private String shortDescription;

    private String longDescription;

    @Enumerated(EnumType.STRING)
    private ECategory category;

    private float price;

    private List<String> specification;

    private List<String> packageContent;

    private List<String> physicalUnit;

}